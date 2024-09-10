import { useState, useEffect } from "react";
import useMarvelService from "../../services/MarvelService";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Spinner from "../spinner/Spinner";
import "./comicsList.scss";

const ComicsList = () => {
    const [comicsList, setComicsList] = useState([]);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [comicsEnded, setComicsEnded] = useState(false);

    const { loading, error, getAllComics } = useMarvelService();

    useEffect(() => {
        onRequest(true);
    }, []);

    const onRequest = (initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true);
        getAllComics().then(onComicsListLoaded);
    };

    const onComicsListLoaded = (newComicsList) => {
        let ended = false;
        if (newComicsList.length < 8) {
            ended = true;
        }

        setComicsList((comicsList) => [...comicsList, ...newComicsList]);
        setNewItemLoading(false);
        setComicsEnded(ended);
    };

    console.log(comicsList);

    function renderItems(arr) {
        const items = arr.map((item, i) => {
            let imgStyle = { objectFit: "cover" };
            if (
                item.thumbnail ===
                "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
            ) {
                imgStyle = { objectFit: "unset" };
            }
            return (
                <li className="comics__item" key={item.id}>
                    <a href="#">
                        <img
                            src={item.thumbnail}
                            alt={item.title}
                            style={imgStyle}
                            className="comics__item-img"
                        />
                        <div className="comics__item-name">{item.title}</div>
                        <div className="comics__item-price">{item.price}</div>
                    </a>
                </li>
                // <li
                //     key={item.id}
                //     tabIndex={0}
                //     ref={(el) => (itemRefs.current[i] = el)}
                //     className="char__item"
                //     onClick={() => {
                //         props.onCharSelected(item.id);
                //         focusOnItem(i);
                //     }}
                //     onKeyDown={(e) => {
                //         if (e.key === " " || e.key === "Enter") {
                //             props.onCharSelected(item.id);
                //             focusOnItem(i);
                //         }
                //     }}
                // >
                //     <img
                //         src={item.thumbnail}
                //         style={imgStyle}
                //         alt={item.name}
                //     />
                //     <div className="char__name">{item.name}</div>
                // </li>
            );
        });
        return <ul className="comics__grid">{items}</ul>;
    }

    const items = renderItems(comicsList);

    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading && !newItemLoading ? <Spinner /> : null;

    return (
        <div className="comics__list">
            {spinner}
            {errorMessage}
            {items}
            <button
                className="button button__main button__long"
                disabled={newItemLoading}
                style={{ display: comicsEnded ? "none" : "block" }}
                onClick={() => onRequest()}
            >
                <div className="inner">load more</div>
            </button>
        </div>
    );
};
export default ComicsList;
