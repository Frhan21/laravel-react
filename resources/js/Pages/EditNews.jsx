import Navbar from "@/Components/Homepages/Navbar";
import { Inertia } from "@inertiajs/inertia";
import { Link, Head } from "@inertiajs/react";
import { useState } from "react";

const EditNews = (props) => {
    console.log(props);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = () => {
        const data = {
            id: props.myNews.id,
            title,
            description,
            category,
        };
        Inertia.post('/news/update', data);
        setTitle("");
        setDescription("");
        setCategory("");
    };
    return (
        <div>
            <Head title={props.title} />
            <Navbar user={props.auth.user} />
            <div className="flex flex-col gap-4 overflow-hidden bg-white shadow-sm sm:rounded-lg">
                <input
                    type="text"
                    placeholder="Masukkan Judul"
                    className="w-full m-2 input input-bordered"
                    onChange={(title) => setTitle(title.target.value)}
                    required
                    defaultValue={props.myNews.title}
                />
                <input
                    type="text"
                    placeholder="Deskripsi"
                    className="w-full m-2 input input-bordered"
                    onChange={(description) =>
                        setDescription(description.target.value)
                    }
                    required
                    defaultValue={props.myNews.description}
                />
                <input
                    type="text"
                    placeholder="Kategori"
                    className="w-full m-2 input input-bordered"
                    onChange={(category) => setCategory(category.target.value)}
                    required
                    defaultValue={props.myNews.category}
                />
                <button
                    className="m-2 btn btn-primary"
                    onClick={() => handleSubmit()}
                >
                    Update
                </button>
            </div>
        </div>
    );
};

export default EditNews;
