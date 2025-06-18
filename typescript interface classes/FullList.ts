import ListItem from "./ListItem";

 interface List{
    list:ListItem[];
    load():void;
    save():void
    addItem(ItemObj: ListItem): void;
    removeItem(id: string):void;
}

export default class FullList implements List{

    static instance: FullList = new FullList()
    private constructor(private _list: ListItem[]=[]){}

    get list():ListItem[]{
        return this._list
    }

    load(): void {
        const storedList: string | null = localStorage.getItem("mysets")
        if(typeof storedList !== "string") return ;

        const parsedList: {_id: string, _item: string, _checked: boolean}[] = JSON.parse(storedList)

        parsedList.forEach(element => {
            const newListItem = new ListItem(element._id, element._item, element._checked)
            FullList.instance.addItem(newListItem)
        });


    }

    save(): void {
        localStorage.setItem("myitem", JSON.stringify(this.list))
    }

    addItem(ItemObj: ListItem): void {
        this._list.push(ItemObj)
        this.save()
    }

    removeItem(id: string): void {
        this._list.filter(item=> item.id !==id)
        this.save()
    }

}
