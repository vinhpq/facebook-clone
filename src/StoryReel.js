import React from 'react'
import "./StoryReel.css";
import Story from "./Story";

function StoryReel() {
    return (
        <div className="storyReel">
            <Story 
                image="http://i3.ytimg.com/vi/VqgTr-nd7Cg/maxresdefault.jpg"
                profileSrc="https://ca.slack-edge.com/TN44SBSKE-UN4JQBZTJ-8ecb6bfd3519-512"
                title="Vincent"
            />
            <Story 
                image="http://i3.ytimg.com/vi/VqgTr-nd7Cg/maxresdefault.jpg"
                profileSrc="https://ca.slack-edge.com/TN44SBSKE-UMRR4P6US-e39c5c386636-512"
                title="Datsama"
            />
            <Story 
                image="http://i3.ytimg.com/vi/VqgTr-nd7Cg/maxresdefault.jpg"
                profileSrc="https://ca.slack-edge.com/TN44SBSKE-UPMQTKJVC-ae50a2328019-512"
                title="Sy Tuan"
            />
            <Story 
                image="http://i3.ytimg.com/vi/VqgTr-nd7Cg/maxresdefault.jpg"
                profileSrc="https://ca.slack-edge.com/TN44SBSKE-UNV07BGBT-g94efc38f3ec-512"
                title="Luan"
            />
            <Story 
                image="http://i3.ytimg.com/vi/VqgTr-nd7Cg/maxresdefault.jpg"
                profileSrc="https://ca.slack-edge.com/TN44SBSKE-UN4JNPGS1-g4ed78948959-512"
                title="Thanh"
            />
            
        </div>
    )
}

export default StoryReel;
