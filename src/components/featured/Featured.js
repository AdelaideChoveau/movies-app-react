import React from "react"
import "./featured.scss";

export default function Featured() {
    return (
        <div className="featured">
            <img
                src="https://img.static-rmg.be/a/view/q75/w1092/h615/2484851/2406455-jpg-r-1920-1080-f-jpg-q-x-xxyxx-jpg.jpg" height="50"
                alt="picture" />
            <div className="info">
                <img
                src="https://img.static-rmg.be/a/view/q75/w1092/h615/2484851/2406455-jpg-r-1920-1080-f-jpg-q-x-xxyxx-jpg.jpg" height="50"
                alt="picture" />
                <span className="description">
                Lorem ipsum dolor sit amet consectur adipiscing.
                Lorem ipsum dolor sit amet consectur adipiscing.
                Lorem ipsum dolor sit amet consectur adipiscing.
                </span>
                <div className="buttons">
                    <button className="play"><i class="fa fa-play"></i>
                        <span>Play</span>
                    </button>
                    <button className="more"><i class="fa fa-info"></i>
                        <span>Info</span>
                    </button>
                </div>
            </div> 
        </div>
    )
}