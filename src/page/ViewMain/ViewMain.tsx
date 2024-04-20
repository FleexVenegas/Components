//Styles
import "./ViewMain.scss";

//Components
import Container from "../../components/atoms/Container/Container";
import Description from "../../components/atoms/Description/Description";
import SubtTitle from "../../components/atoms/SubtTitle/SubtTitle";
import Title from "../../components/atoms/Title/Title";

const ViewMain = () => {
    return (
        <Container className="ViewMain">
            <Title title="Bienvenido a DV Components" />
            <Description>
                En DV Components, se creo una colección de componentes en
                ReactJS y React tsx listos para usar en tus proyectos. Lo mejor
                de todo es que no necesitas instalar nada. Simplemente copia el
                componente que necesitas, pégalo en tu proyecto y listo. ¡Es así
                de simple!
            </Description>
            <SubtTitle title="¿Por qué elegir nuestros componentes?" />
            <Description>
                1. Facilidad de uso: Nuestros componentes están diseñados para
                ser simples de implementar, ahorrándote tiempo y esfuerzo en tu
                desarrollo. <br /> 2. Personalización: Siempre puedes modificar
                el código según tus necesidades. ¡Hazlo tuyo! <br /> 3. No se
                requiere instalación: Olvídate de las complicaciones de instalar
                dependencias adicionales. Con nuestros componentes, simplemente
                cópialos y pégalos en tu proyecto.
            </Description>
            <SubtTitle title="Acceso a los recursos" />
            <Description>
                Todos los componentes y recursos, incluyendo iconos e imágenes
                utilizados en los componentes, están disponibles en el
                repositorio de GitHub. Cada componente se encuentra en su
                respectiva carpeta, lo que facilita su exploración, modificación
                y uso en tus proyectos.
            </Description>
            <SubtTitle title="¿Cómo empezar?" />
            <Description>
                1. Explora nuestra colección de componentes en la sección
                correspondiente. <br /> 2. Copia el código del componente que
                necesitas. <br /> 3. Pégalo en tu proyecto ReactJS. <br /> 4.
                ¡Personaliza según tus necesidades y observa cómo tus proyectos
                cobran vida!
            </Description>
            <SubtTitle title="¡Únete a nuestra comunidad!" />
            <Description>
                ¡Te invitamos a unirte a nuestra comunidad en GitHub! Si tienes
                alguna pregunta, sugerencia o simplemente quieres compartir tus
                experiencias con los componentes, ¡nos encantaría escucharte!
            </Description>
            <Description>
                ¡Gracias por elegir DV Components para tus necesidades de
                desarrollo en ReactJS!
            </Description>
        </Container>
    );
};

export default ViewMain;
