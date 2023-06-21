import React from 'react'

export function TweetForm({onSubmit,tweets}) {

    const sendTweet=(e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        const content = e.target.content.value;
        const id = tweets.length+1;
        const newTweet = {
            id,
            name,
            content,
            like:0
        }

        onSubmit(newTweet);
    }
    return (
        <form onSubmit={sendTweet} className="tweetForm">
            <h4>New Tweet</h4>
            <input type="text" name="name" placeholder="Name"/>
            <input type="text" name="content" placeholder="Content"/>
            <input type="submit" />
        </form>
    )
}
