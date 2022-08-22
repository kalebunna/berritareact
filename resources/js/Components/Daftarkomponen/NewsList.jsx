const isNews = (news) => {
    return news.map((data, i) => {
        return (
            <div key={i} className="card w-96 bg-base-100 shadow-xl">
                <figure>
                    <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {data.title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{data.description}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">
                            {data.category}
                        </div>
                        <div className="badge badge-outline">{data.author}</div>
                    </div>
                </div>
            </div>

            // <>
            // <div>{data.title}</div>
            // <div>{data.description}</div>
            // <div>{data.category}</div>
            // <div>{data.author}</div>
            // </>
        );
    });
};

const nonews = () => {
    return (
        <div>
            <p>tidak ada data berita</p>
        </div>
    );
};

const NewsList = ({ news }) => {
    if (!news) return nonews();
    else return isNews(news);
};
export default NewsList;
