import { PresentationSection } from "./components/PresentationSection";
import { Products } from "./components/Products";
import { HomeContainer } from "./styles";

export function Home() {

    return (
        <HomeContainer>
            <PresentationSection />
            <Products />
        </HomeContainer>
    )
}