import Card from "@/Components/Homepages/Card";
import Navbar from "@/Components/Homepages/Navbar";
import Paginator from "@/Components/Homepages/Paginator";
import { Link, Head } from "@inertiajs/react";

export default function Homepage(props) {
    return (
        <>
            <div className='min-h-screen font-["Poppins"] bg-white text-neutral-700'>
            <Head title={props.title} />
            <Navbar user={props.auth.user}/>
                <p className="font-bold text-2xl text-center">{props.description}</p>
                <div className='flex justify-center flex-col md:flex-row md:flex-wrap gap-4 mt-4'>
                    <Card news = {props.news.data}/>
                </div>
                <div>
                    <Paginator meta ={props.news.meta}/>
                </div>
            </div>
        </>
    );
}
