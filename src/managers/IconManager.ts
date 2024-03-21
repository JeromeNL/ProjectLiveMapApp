import {
    Icon,
    IconChefHat,
    IconHorseToy,
    IconQuestionMark,
    IconSmoking,
    IconTrash
} from '@tabler/icons-react-native'

export enum PhoenixIcon {
    ChefHat = 'chef-hat',
    Trash = 'trash',
    HorseToy = 'horse-toy',
    Smoking = 'smoking'
}

class IconManager {
    static getIcon(key: PhoenixIcon): Icon
    static getIcon(key: string): Icon
    static getIcon(key: PhoenixIcon | string): Icon {
        switch (key) {
            case PhoenixIcon.ChefHat:
                return IconChefHat
            case PhoenixIcon.Trash:
                return IconTrash
            case PhoenixIcon.HorseToy:
                return IconHorseToy
            case PhoenixIcon.Smoking:
                return IconSmoking
            default:
                return IconQuestionMark
        }
    }

    static getAvailableIcons(): { key: string; component: Icon }[] {
        const icons: { key: string; component: Icon }[] = []
        for (const key in PhoenixIcon) {
            if (Object.prototype.hasOwnProperty.call(PhoenixIcon, key)) {
                const enumKey = PhoenixIcon[key as keyof typeof PhoenixIcon]
                icons.push({
                    key: enumKey,
                    component: IconManager.getIcon(enumKey)
                })
            }
        }
        return icons
    }
}

export default IconManager
