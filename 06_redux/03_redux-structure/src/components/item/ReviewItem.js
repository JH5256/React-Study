import { Link } from "react-router-dom";

function ReviewItem({review}) {
    return(
        <Link to={`/review/${review.id}`}>
            <div className="menuItem">
                <h3>리뷰 작성인 : { review.writer } </h3>
                <h3>리뷰 제목 : { review.title } </h3>
            </div>
        </Link>
    );
}

export default ReviewItem;