import MySlider from './MySlider';

interface HobbyArticleProps {
    imgs: string[];
    alt: string;
    title: string;
    text: string;
}

export default function HobbyArticle(props: HobbyArticleProps) {
    const { imgs, alt, title, text } = props;
    return (
        <article className="max-w-xl mx-auto my-20">
            <MySlider
                images={imgs}
                alt={alt}
            />
            <div>
                <h2 className="my-4 font-bold text-3xl">{title}</h2>
                <p>{text}</p>
            </div>
        </article>
    )
}