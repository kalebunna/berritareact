import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import Navbar from "@/Components/Navbar";
import NewsList from "@/Components/Daftarkomponen/NewsList";
import Paginator from "@/Components/Daftarkomponen/Paginator";
import Footer from "@/Components/Daftarkomponen/footer";

export default function Homepage(props) {
    return (
        <div className="min-h-screen bg-slate-50  text-2xl">
            <Head title={props.judul} />
            <Navbar />
            <div className="flex justify-center flex-col md:flex-row md:flex-wrap md:items-stretch items-center gap-4">
                <NewsList news={props.news.data} />
            </div>
            <div className="flex justify-center items-center">
                <Paginator meta={props.news.meta} />
            </div>
            <Footer />
        </div>
    );
}
