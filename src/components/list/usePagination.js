import { useState } from 'react'

export default function usePagination() {
    
    const [ currentPage, setCurrentPage ] = useState(1)
    const [ next, setNext ] = useState(false)
    const [ prev, setPrev ] = useState(false)
    

    const pagination = 10
    const lastIndex = currentPage * pagination;
    const fistIndex = lastIndex - pagination

    const arrayRender = isValidFilter ? filterNotificationsRender : Notificaciones;

    const datos = arrayRender.slice(fistIndex, lastIndex)

    const npage = Math.ceil(arrayRender.length / pagination)

    const numbers = [...Array(npage + 1).keys()].slice(1);

    function prePage() {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    function changePage(id) {
        setCurrentPage(id)
    }

    function NextPage() {
        if (currentPage !== npage) {
            setCurrentPage(currentPage + 1)
        } else {
            setNext(true)
        }
    }

    function verificaBtn() {
        if (currentPage <= 1) {
            setPrev(true)
        } else {
            setPrev(false)
        }
        if (currentPage === npage) {
            setNext(true)
        } else {
            setNext(false)
        }
    }

    return { prev, next, currentPage, datos, NextPage, changePage, prePage, verificaBtn}
}