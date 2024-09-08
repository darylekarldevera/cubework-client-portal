import Header from "@/components/Header";
// import ContentFullWidth from "./ContentFullWidth";
import ContentFullWidthWSidebar from "./ContentFullWSidebar";

export default function Main() {
    return (<div className="main flex flex-col h-full">
        <section className="h-12">
            <Header />
        </section>
        <section className="flex-grow">
            <ContentFullWidthWSidebar />
        </section>
    </div>);
}
