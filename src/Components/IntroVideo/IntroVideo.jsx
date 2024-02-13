import "./IntroVideo.css"
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs'
import meal from '../../assets/meal.mp4'
import { useRef, useState } from "react";

export default function IntroVideo() {
    const [playVideo, setPlayVideo] = useState(false)
    const vidRef = useRef();
    const handleVideo = () => {
        setPlayVideo(!playVideo)
        if (playVideo) {
            vidRef.current.pause();
        }
        else {
            vidRef.current.play();
        }
    }
    return (
        <div className="introvideo-container">
            <video
                src={meal}
                ref={vidRef}
                type='video/mp4'
                loop
                controls={false}
                muted
            />

            <div className="video-icon">
                <div onClick={handleVideo} className="video-icon-overlay">
                    {playVideo ? (<BsPauseFill  color="#fff" size={30}/>) : (<BsFillPlayFill color="#fff" size={30} />) }
                </div>

            </div>

        </div>
    )
}
