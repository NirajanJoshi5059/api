import React from 'react'
import {
    Navbar,
    Typography,
    Button,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Avatar,
    Input,
} from "@material-tailwind/react";

import {
    UserCircleIcon,
    ChevronDownIcon,
    Cog6ToothIcon,
    ShoppingCartIcon,
    ShoppingBagIcon,
    PowerIcon,

} from "@heroicons/react/24/outline";
import { NavLink } from 'react-router-dom';

const userMenu = [
    {
        label: "My Profile",
        icon: UserCircleIcon,
    },
    {
        label: "Edit Profile",
        icon: Cog6ToothIcon,
    },
    {
        label: "Cart",
        icon: ShoppingCartIcon,
    },
    {
        label: "Sign Out",
        icon: PowerIcon,
    },
];

const adminMenu = [
    {
        label: "My Profile",
        icon: UserCircleIcon,
    },
    {
        label: "Edit Profile",
        icon: Cog6ToothIcon,
    },
    {
        label: "Product",
        icon: ShoppingBagIcon,
    },
    {
        label: "Sign Out",
        icon: PowerIcon,
    },
];
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <>
            <Navbar className="mx-auto max-w-screen-3xl p-2 px-6 py-1">
                <div className="text-blue-gray-900 flex justify-between">
                    <Typography className="mr-4 ml-2 cursor-pointer py-1.5 font-bold font-serif">
                        <NavLink to='/'> MOVIE API  </NavLink>
                    </Typography>

                    <div className="relative flex w-full md:w-max">
                        <Input type="search"
                            label="Type here..."
                            className="pr-20"
                            containerProps={{
                                className: "min-w-[488px]",
                            }}
                        />
                        <Button size="sm" className="!absolute right-1 top-1 rounded">
                            Search
                        </Button>
                    </div>

                    <div className="flex items-center space-x-5">
                        <div className="space-x-5">
                            {/* <NavLink to='/mealApi/category'>Meal Api</NavLink> */}
                            <NavLink to='/movie/popular'>Popular</NavLink>
                            <NavLink to='/movie/top_rated'>Top Rated</NavLink>
                            <NavLink to='/movie/upcoming'>Upcoming</NavLink>
                        </div>


                        <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
                            <MenuHandler>
                                <Button
                                    variant="text"
                                    color="blue-gray"
                                    className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
                                >
                                    <Avatar
                                        variant="circular"
                                        size="sm"
                                        alt="tania andrew"
                                        className="border border-gray-900 p-0.5"
                                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                                    />
                                    <ChevronDownIcon
                                        strokeWidth={2.5}
                                        className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""
                                            }`}
                                    />
                                </Button>
                            </MenuHandler>
                            <MenuList className="p-1">
                                {userMenu.map(({ label, icon }, key) => {
                                    const isLastItem = key === userMenu.length - 1;
                                    return (
                                        <MenuItem
                                            key={label}
                                            onClick={closeMenu}
                                            className={`flex items-center gap-2 rounded ${isLastItem
                                                ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                                                : ""
                                                }`}
                                        >
                                            {React.createElement(icon, {
                                                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                                                strokeWidth: 2,
                                            })}
                                            <Typography
                                                as="span"
                                                variant="small"
                                                className="font-normal"
                                                color={isLastItem ? "red" : "inherit"}
                                            >
                                                {label}
                                            </Typography>
                                        </MenuItem>
                                    );
                                })}
                            </MenuList>
                        </Menu>
                    </div>
                </div>
            </Navbar>
        </>
    )
}

export default Header
