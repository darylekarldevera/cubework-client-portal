import Logo from "./Logo";
import ProfilesButtons from "./ProfileButtons";

export default function Header() {
    return (<div className="header">
        <div className="flex flex-row">
            <div className="flex-grow">
                <Logo />
            </div>
            <div>
                <ProfilesButtons />
            </div>
        </div>
    </div>);
}