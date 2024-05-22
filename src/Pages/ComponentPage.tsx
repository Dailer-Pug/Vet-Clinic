import { Button } from "../components/coreComponents/ButtonCore/Button"
import { Collapse } from "../components/coreComponents/CollapseCore/Collapse"
import { Input } from "../components/coreComponents/InputCore/Input"
import { TabItem } from "../components/coreComponents/RadioInput/TabItem"
import { TabGroup } from "../components/coreComponents/RadioInput/Tabs"
import { Slider } from "../components/coreComponents/Slider/Slider"
import { Div } from "../components/coreComponents/Slider/Slider.styled"
import { SliderItem } from "../components/coreComponents/Slider/SliderItem"


export const Components = () => {

  return (
    <>

      <Button size={55} color="green" outline>Hello</Button>
      <Button size={55} color="blue" primary>Hello</Button>
      <Button size={55} color="pink" ghost>Hello</Button>
      <Input placeholder='Hello...' type="text" size={10} primary />
      <Collapse tittle='Hello Denis'>
        <p>In this world, is the destiny of mankind controlled
          by some transcendental entity or law...? Is it like the hand of God hovering above?</p>
        <p> At least it is true that man has no control, even over his own will.</p>
      </Collapse>

      <TabGroup>
        <TabItem title="Все">
          Товары под тэгом Все
        </TabItem>
        <TabItem title="Кошки">
          Товары под тэгом Кошки
        </TabItem>
        <TabItem title="Собаки">
          Товары под тэгом Собаки
        </TabItem>
        <TabItem title="Грызуны">
          Товары под тэгом Грызуны
        </TabItem>
        <TabItem title="Птицы">
          Товары под тэгом Птицы
        </TabItem>
        <TabItem title="Рептилии">
          Товары под тэгом Рептилии
        </TabItem>
        <TabItem title="Рыбы">
          Товары под тэгом Рыбы
        </TabItem>
      </TabGroup>
      <Div>
        <Slider>
          <SliderItem src="https://img.freepik.com/free-photo/mushrooms-seen-with-intense-b
					rightly-colored-lights_23-2151357714.jpg?w=1380&t=st=1715944750~exp=171594535
					0~hmac=6a4ac065e3ab22561cdb75bc04f33ae94d3f1c950c053aac1f9ebe14c3e3497e" />
          <SliderItem src="https://images.wallpapershq.com/wallpapers/8083/wallpaper_8083_1080x1920.jpg" />
          <SliderItem src="https://s00.yaplakal.com/pics/pics_original/2/7/5/17247572.jpg" />
        </Slider>
      </Div>

    </>
  )
}
