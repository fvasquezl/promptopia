import Feed from "@components/Feed"

const Home = () => {
    return (
        <section className="w-full flex-center flex-col">
            <h1 className="head_text text-center"> Discover & share
                <br className="max-md:hidden" />
                <span className="orange_gradient text-center">AI-Poweres Prompts</span>
            </h1>
            <p className="desc text-center">Promptopia is an open-source AI prompting tool for modern word to discover, create an share creative prompts</p>
            <Feed />
        </section>

    )
}

export default Home