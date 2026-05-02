import './mainpage.css'
import { useNavigate } from 'react-router-dom'

export default function Mainpage() {
    const navigate = useNavigate();

    return (
        <>
            <h1 onClick={() => navigate('/about')}>메인페이지</h1>
        </>
    )
}