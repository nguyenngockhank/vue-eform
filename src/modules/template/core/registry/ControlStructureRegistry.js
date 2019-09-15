import EntityRegistry from 'core/entityRegistry';

/// key is a subtype of control
class ControlStructureRegistry extends EntityRegistry {
    menuItemControlList() {
        const result = [];
        this.allowedKeys.forEach((structure, key) => {
            let { label = '', icon = '' } = structure;
            
            result.push({ 
                label, icon, key
            });
        })

        return result;
    }
}

export default new ControlStructureRegistry;

