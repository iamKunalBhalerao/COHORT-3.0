// Server Side Rendering Code
import Button from "@/components/Button";

export default function ssr() {
    return (
        <>
            <div className="">
                <h1>This is Server side rendering</h1>
                <Button />
            </div>
        </>
    )
}