import { useEffect, useState } from "react"
import initializeAuthentication from "../../components/Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";

initializeAuthentication();


const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const location = useLocation();
    const navigte = useNavigate();
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    const googleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                //console.log(user);
                setUser(user);
                const destination = location.state.from || '/';
                navigte(destination)

            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                setError(errorMessage)

            });


    }

    const googleLogOut = () => {
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            setError(error)
        });

    }

    useEffect(() => {

        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                //console.log(user);
                setUser(user)

            } else {

            }
        });
    }, [])

    return {
        user,
        error,
        googleSignIn,
        googleLogOut
    }

}

export default useFirebase;