import * as TablerIcon from '@tabler/icons-react-native'
import * as changeCase from 'change-case'

class IconManager {
    static getIcon(key: string): TablerIcon.Icon {
        // Assume kebab case
        if (key[0] !== key[0].toUpperCase()) {
            key = `Icon${changeCase.pascalCase(key)}`
        }
        const icon = TablerIcon[key as keyof typeof TablerIcon]
        if (!icon) {
            return TablerIcon.IconQuestionMark
        }
        return icon as TablerIcon.Icon
    }

    static iconToKebabCase(icon: TablerIcon.Icon): string | null {
        const iconName = icon.displayName?.replace('Icon', '')
        if (!iconName) {
            return null
        }
        return changeCase.kebabCase(iconName)
    }
}

export default IconManager

