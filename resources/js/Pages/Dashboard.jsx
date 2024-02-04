import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, Head } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { Inertia } from "@inertiajs/inertia";

export default function Dashboard(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [isNotif, setIsNotif] = useState("");

    const handleSubmit = () => {
        const data = {
            title,
            description,
            category,
        };
        Inertia.post("/news", data);
        setIsNotif(true);
        setTitle("");
        setDescription("");
        setCategory("");
    };

    return (
        <AuthenticatedLayout
            user={props.auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="flex flex-col gap-4 overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        {isNotif && (
                            <div role="alert" className="alert alert-success">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 stroke-current shrink-0"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                <span>{props.flash.message}</span>
                            </div>
                        )}
                        <input
                            type="text"
                            placeholder="Masukkan Judul"
                            className="w-full m-2 input input-bordered"
                            onChange={(title) => setTitle(title.target.value)}
                            required
                            value={title}
                        />
                        <input
                            type="text"
                            placeholder="Deskripsi"
                            className="w-full m-2 input input-bordered"
                            onChange={(description) =>
                                setDescription(description.target.value)
                            }
                            required
                            value={description}
                        />
                        <input
                            type="text"
                            placeholder="Kategori"
                            className="w-full m-2 input input-bordered"
                            onChange={(category) =>
                                setCategory(category.target.value)
                            }
                            required
                            value={category}
                        />
                        <button
                            className="m-2 btn btn-primary"
                            onClick={() => handleSubmit()}
                        >
                            Save Data
                        </button>
                    </div>
                    {props.myNews && props.myNews.length > 0 ? (
                        props.myNews.map((data, index) => {
                            return (
                                <div className="mt-4 ">
                                    <div
                                        key={index}
                                        className="w-full shadow-xl card bg-base-100"
                                    >
                                        <div className="card-body">
                                            <h2 className="card-title">
                                                {data.title}
                                                <div className="badge badge-secondary">
                                                    NEW
                                                </div>
                                            </h2>
                                            <p>{data.description}</p>
                                            <div className="justify-end card-actions">
                                                <div className="text-white badge badge-inline bg-slate-500">
                                                    {data.category}
                                                </div>
                                                <div className="badge badge-primary">
                                                    <Link
                                                        href={route(
                                                            "edit.news"
                                                        )}
                                                        as="button"
                                                        method="get"
                                                        data={{ id: data.id }}
                                                    >
                                                        Edit
                                                    </Link>
                                                </div>
                                                <div className="text-white bg-red-700 badge badge-inline">
                                                    <Link
                                                        href={route(
                                                            "delete.news"
                                                        )}
                                                        as="button"
                                                        method="post"
                                                        data={{ id: data.id }}
                                                    >
                                                        Hapus
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <p>Anda Belum Memilii Berita</p>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
