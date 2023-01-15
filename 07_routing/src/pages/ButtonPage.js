import Button from "../components/Button";
import { GoBell, GoCloudDownload, GoBook, GoDatabase, GoBug } from 'react-icons/go';

function ButtonPage() {

    const handleClick = () => {
        console.log('Click!');
    }

    return (
        <div>
            <div>
                <Button success rounded outline className="mb-4" onClick={handleClick}>
                    <GoBell />
                    Click Me!
                </Button>
            </div>
            <div>
                <Button danger outline>
                    <GoCloudDownload />
                    Buy Now!
                </Button>
            </div>
            <div>
                <Button warning>
                    <GoDatabase />
                    See Deal!
                </Button>
            </div>
            <div>
                <Button secondary outline>
                    <GoBook />
                    Hide Ads!
                </Button>
            </div>
            <div>
                <Button primary rounded>
                    <GoBug />
                    Something!
                </Button>
            </div>
        </div>
    );
}

export default ButtonPage;
