import { Card, CardContent, Typography } from "@material-ui/core";
import { forwardRef } from "react";
import './Message.css'

const Message =  forwardRef(({username, message} , ref) => {
    const isUser = username === message.username;
    //console.log("message.username", message.username, isUser)
    return (
        <div ref={ref} className={`message ${isUser && 'message_user'}`}>
            <Card className={isUser ? 'message_user_card' : 'message_guest_card' } >
                <CardContent>
                    <Typography
                        variant="h5"
                        component="h2"
                    >
                        {!isUser && `${message.username || 'Unknown'}:`} {message.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
})

export default Message;