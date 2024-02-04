const isNews = (news) => {
    return (
        news.map((data, index) => {
            return (
                <div key={index} className="w-full shadow-xl card lg:w-96 bg-base-100">
                    <figure>
                        <img
                            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                            alt="Shoes"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {data.title}
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>{data.description}</p>
                        <div className="justify-end card-actions">
                            <div className="badge badge-outline">{data.category}</div>
                            <div className="badge badge-outline">{data.author}</div>
                        </div>
                    </div>
                </div>

            )
        })
    )
}

const noNews = () => {
    return (
        <div>Belum ada berita yang tersedia</div>
    )
}

const Card = ({ news }) => {
    return !news ? noNews() : isNews(news)
};

export default Card;
