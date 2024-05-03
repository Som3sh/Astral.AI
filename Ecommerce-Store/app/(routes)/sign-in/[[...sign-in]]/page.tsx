import Container from "@/components/ui/container";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
    return (
        <Container>
            <div className="flex justify-center items-center my-28">
                <SignIn />;
            </div>
        </Container>
    )
}