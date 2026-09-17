const Header = () => {

    const course = "Programming";
    const title = "My Task Board";
    const description = "You can plan here and keep track of the team's tasks";

    return (
      <header className="bg-[#3b2f2f] text-[#d4af37] px-4 py-6 text-center">
        <h1 className="text-2xl font-bold mb-2">{course}</h1>
        <h2 className="text-3xl font-bold mb-2">{title}</h2>
        <p className="text-base text-[#fffaf0]">{description}</p>
      </header>
    );


};

export default Header;