import { useHttp } from "../components/hooks/http.hook";

const useMarvelService = () => {
    const { loading, request, error, clearError } = useHttp();

    const _apiBase = "https://gateway.marvel.com:443/v1/public/",
        _apiKey = "apikey=faf6c17a83411d3e01a88a361058d31f",
        _baseOffset = 210;

    const getAllCharacters = async (offset = _baseOffset) => {
        const res = await request(
            `${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`
        );
        return res.data.results.map(_transformCharacter);
    };
    const getCharacter = async (id) => {
        const res = await request(`${_apiBase}characters/${id}?&${_apiKey}`);
        return _transformCharacter(res.data.results[0]);
    };

    const getAllComics = async () => {
        const res = await request(`${_apiBase}comics?limit=8&${_apiKey}`);
        return res.data.results.map(_transformComics);
    };

    const _transformCharacter = (char) => {
        return {
            id: char.id,
            name: char.name,
            description: char.description
                ? `${char.description.slice(0, 210)}...`
                : "There is no description for this character",
            thumbnail: char.thumbnail.path + "." + char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            comics: char.comics.items,
            title: char.title,
        };
    };

    const _transformComics = (char) => {
        return {
            id: char.id,
            title: char.title,
            price:
                char.prices && char.prices[0].price
                    ? `${char.prices[0].price}$`
                    : "NOT AVAILABLE",
            thumbnail: char.thumbnail.path + "." + char.thumbnail.extension,
        };
    };

    return {
        loading,
        error,
        clearError,
        getAllCharacters,
        getCharacter,
        getAllComics,
    };
};

export default useMarvelService;
