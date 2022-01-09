import { ArrowBackOutlined } from "@material-ui/icons"
import "./watch.scss"

export default function Watch() {
    return (
        <div className="watch">
            <div className="back">
                <ArrowBackOutlined />
                Home
            </div>
            <iframe
                className="video"
                autoPlay
                progress
                controls
                src="https://www.youtube.com/embed/tgbNymZ7vqY" />
        </div>

    )
}