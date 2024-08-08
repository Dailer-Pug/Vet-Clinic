import { cloneElement, useState, JSX, Children } from "react";

type RatingProps = {
    children: JSX.Element | JSX.Element[];
    size: number;
}


export const Rating = ({ children, size }: RatingProps) => {


    const [click, setClick] = useState(-1)
    const [clickPos, setClickPos] = useState(-1)
    const [onIndex, setOnIndex] = useState(-1)
    const [onSteps, setOnStep] = useState(-1)
    children = Array.isArray(children) ? children : [children]


    const mouseOut = () => {
        setClickPos(click)
        setOnStep(-1)
    }

    const mouseMove = (event: React.MouseEvent<Element, MouseEvent>, actual: number) => {
        const currentPlace = event.clientX;
        const starStartX = actual * size;
        const relativeX = currentPlace - starStartX;
        const step = 0.10;
        const stepPerPx = size * step;

        let onStep = Math.ceil(relativeX / stepPerPx) * step;
        onStep = Math.max(0, Math.min(onStep, 1));
        setOnStep(onStep + actual)
        setOnIndex(actual)
    }

    const maping = Children.toArray(children).map((child: any, index: number) => {

        const fill = Math.min(1, Math.max(0, onSteps - index))
        const clickFill = Math.min(1, Math.max(0, clickPos - index))

        console.log(click + ":" + clickPos)

        return (
            cloneElement(child, {
                ...child.props,
                onMouseOver: () => {
                    setClickPos(-1)
                },
                actual: index,
                onSteps: clickPos > -1 ? clickFill : fill,
                mouseMove: mouseMove,
                set: () => {
                    setClick(onSteps)
                },
                setOnIndex: (index: number) => {
                    setOnIndex(index)
                    console.log(onIndex + ":" + index)
                },
            })
        )
    })

    return (
        <div onMouseOut={mouseOut} className="star_form">
            {maping}
            <b>{click}</b>
        </div >
    )
}
