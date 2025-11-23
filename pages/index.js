import styles from "./Home.module.css"

function Home() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Hello World</h1>
            <p className = {styles.message}>
                Obrigado, <strong className = {styles.highlight}>Rogério</strong>.<br /> 
                O seu jeito único, sua autenticidade e sua presença marcaram o meu caminho. <br />
                Foi através dessa singularidade que eu encontrei luz, inspiração e parte da pessoa que sou hoje.
            </p>
        </div>
    );
}

export default Home;