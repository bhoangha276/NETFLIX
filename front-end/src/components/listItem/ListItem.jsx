import "./listItem.scss"
import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@material-ui/icons"

export default function ListItem() {
    return (
        <div className="listItem">
            <img src="https://www.denofgeek.com/wp-content/uploads/2018/10/venom_movie_post_credits_explained.jpg?fit=1012%2C700" alt=""/>
            <div className="itemInfo">
                <div className="icons">
                    <PlayArrow/>
                    <Add/>
                    <ThumbDownAltOutlined/>
                    <ThumbUpAltOutlined/>
                </div>
            </div>
        </div>
    )
}
