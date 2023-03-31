import dryIcon from '../images/box.svg'
import reeferIcon from '../images/ice.svg'
import customIcon from '../images/pencil.svg'
const containers=[
    {
        id:1,
        title:'Dry',
        description:'Unidade padrão sem modificações, usada em obras, depósitos, armazenamento temporário e segurança.',
        icon: dryIcon,
        path: '/app/projetoscontainers/dry/page.jsx'
    },
    {
        id:2,
        title:'Reefer',
        description:'Com isolamento térmico é ideal para armazenamento de produtos sensíveis, câmaras frias e depósitos em geral.',
        icon:reeferIcon,
        path: '/app/projetoscontainers/reefer/page.jsx'
    },
    {
        id:3,
        title:'Personalizado',
        description:'Focado para diversos projetos e negócios, oferecendo soluções sustentáveis, flexíveis e econômicas de alta qualidade.',
        icon:customIcon,
        path: '/app/projetos/containers/personalizado/page.jsx'
    },
]
export default containers
