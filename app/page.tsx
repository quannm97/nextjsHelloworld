import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
    return <main>
        <h1>users</h1>
        <Link href="/users">news</Link>
        <ProductCard/>
    </main>;
}
