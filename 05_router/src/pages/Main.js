import { Link } from "react-router-dom";

function Main() {
    return (
        <div>
            <h1>메인</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">소개</Link>
                <Link to="/meni">메뉴 목록</Link>
            </nav>
        </div>
    );
}

export default Main;