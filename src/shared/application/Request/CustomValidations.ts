import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";

const regex = /^\d+$/
const toArray = (string) => string.split(',')
const isStringNumber = (value) => value.match(regex)

@ValidatorConstraint({name: 'customText', async: false})
export class StringNumberCommaSeparated implements ValidatorConstraintInterface {

    validate(text: string, args: ValidationArguments) {
        if (text) {
            const values = toArray(text)
            return values.every(value => isStringNumber(value))
        }
        return false
    }

    defaultMessage(args: ValidationArguments) {
        const {property} = args
        return `${property} must be an string number with comma separated`;
    }
}

@ValidatorConstraint({name: 'customEnum', async: false})
export class EnumCommaSeparated implements ValidatorConstraintInterface {

    validate(text: string, args: ValidationArguments) {
        if (text) {
            const {constraints} = args;
            const values = toArray(text);
            return values.every(value => constraints.includes(value))
        }
        return false;
    }

    defaultMessage(args: ValidationArguments) {
        const {property} = args
        const {constraints} = args
        return `${property} must be an string with comma separated with at least 1 or more  values from ${constraints.join(',')}`;
    }
}
