import { useState, useEffect } from "react";
import Alert from 'react-bootstrap/Alert'
// import Button from "react-bootstrap/Button";

function ErrorAlert({error}) {
    const [show, setShow] = useState(false);      // starts life with this condition

    useEffect(() =>{
      setShow(true)       // does this on dependency change [error]
      const timer = setTimeout(() =>{
        setShow(false)        // does this after timer runs out
      }, 4000)
      return () => {
        clearTimeout(timer)
      }
    }, [error]);

    if (show && error ) {     // show must be true AND error must not be null (default error is null)
        return (
          <Alert variant="danger" onClose={() => setShow(false)} dismissible>
            <Alert.Heading>Error </Alert.Heading>
            { typeof(error)==="string" ? <p>{error}</p> :  
              error.map( text => (<p key={text}>{text}</p>) )
            }
          </Alert>
        );
      }
      // return <Button size="sm" onClick={() => setShow(true)}>Show Alert</Button>;
      return null;

}

export default ErrorAlert;