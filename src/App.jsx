import { useState } from "react";
import { Tweet } from "./Tweet";
import { TweetForm } from "./TweetForm";

const DEFAULT_TWEET = [
  {
    id:1,
    name:"Jean-Louis",
    content:"Je vais super bien",
    like:5000
  },
  {
    id:2,
    name:"Didier",
    content:"Brrr...",
    like:1200
  },
  {
    id:3,
    name:"Luca",
    content:"Oh yes",
    like:3000
  }
]
export function App(){
  const [tweets, setTweets] = useState(DEFAULT_TWEET);

  const handleDelete = (id)=>{
    setTweets(
      (curr)=>curr.filter(tweet=>tweet.id!=id)
    )
  }

  const handleLike = (id)=>{
    setTweets(curr=>{
      const copyTweet = [...curr];
      let likeTweet = copyTweet.find(tweet=>tweet.id===id);
      likeTweet.like+=1;
      return copyTweet;
    })
  }
  const tweetLists = tweets.map((tweet,index)=>(
    <Tweet id={tweet.id} onLike={()=>handleLike(tweet.id)} key={index} nom={tweet.name} onDelete={()=>handleDelete(tweet.id)} content={tweet.content} like={tweet.like}/>
  ))
  
  const handleSubmit=(Tweet)=>{
    const newTweet = {
        name:Tweet.name,
        content:Tweet.content,
        like:0
    }

    addTweet(newTweet);
}
  const addTweet = (tweet)=>{
    setTweets([...tweets,tweet]);
  }
  return <div>
        <TweetForm onSubmit={handleSubmit} tweets={tweets}/>
        <div className="tweetContainer">
         {tweetLists}
        </div>
    </div>
}
