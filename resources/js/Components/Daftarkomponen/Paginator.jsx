import { Link } from "@inertiajs/inertia-react";

const Paginator = ({ meta }) => {
    const ccurrent = meta.links.length - 1;
    const prev = meta.links[0].url;
    const next = meta.links[ccurrent].url;
    const current = meta.current_page;
    console.log(next);
    return (
        <div className="btn-group">
            <Link className="btn" href={prev}>
                Prev
            </Link>
            <Link className="btn">{current}</Link>
            <Link href={next} className="btn">
                Next
            </Link>
        </div>
    );
};

export default Paginator;
