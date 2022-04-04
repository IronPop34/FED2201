import SideNavItem from "../SideNav/SideNav";
import SideNav from "../SideNav/SideNav";

function StartMenu() {
    const menuOptions = [
        "Play",
        "Options",
        "Quit",
    ];

    const menuItems = menuOptions.map((options) => <SideNavItem title ={options.toUpperCase()} />);

    return (
        <div className="start-menu wrapper">
            <div className="main-section">
                <h1> Start Menu </h1>

                {SideNavItem}
            </div>
        </div>
    );
}

export default StartMenu;