import React from 'react';

type GreetProps = {
  name: string,
  messageCount: number,
  isLoggedIn: boolean
}

export function Greet(props: GreetProps){
    return(<div>
        <h2>
            {props.isLoggedIn
               ? `Welcome {props.name} ! you have {props.messageCount} unread message` 
               : 'Welcome Guest'
}
        </h2>
    </div>
    )
}