import {expect, test} from 'vitest'
/*
    1️⃣ Ссылка: https://leetcode.com/problems/two-sum/description/

    2️⃣ Описание
1. Сумма двух
Учитывая массив целых чисел nums и целое число target, верните индексы двух чисел таким образом,
чтобы они в сумме равнялись target.

Вы можете предположить, что каждый ввод будет иметь ровно одно решение,
и вы не можете использовать один и тот же элемент дважды.

Вы можете вернуть ответ в любом порядке.

    Пример 1:
        Входные данные: nums = [2,7,11,15], target = 9
        Выходные данные: [0,1]  ( ➡️ expect )
        Объяснение: Поскольку nums[0] + nums[1] == 9, мы возвращаем [0, 1].
    Пример 2:
        Входные данные: числа = [3,2,4], цель = 6
        Выходные данные: [1,2] ( ➡️ expect )
    Пример 3:
        Входные данные: числа = [3,3], цель = 6
        Выходные данные: [0,1] ( ➡️ expect )
 */

// 🧚🧚🧚🧚🧚 Решение
function twoSum(nums: number[], target: number): number[] {
    const indices: Record<number, number> = {};
    for (let i = 0; i < nums.length; i++) {
        indices[nums[i]] = i;
    }

    for (let i = 0; i < nums.length; i++) {
        const complimentValue = target - nums[i];
        const complimentIndex = indices[complimentValue];
        if (i !== complimentIndex && complimentIndex !== undefined)
            return [i, complimentIndex];
    }

    throw new Error("Did not find a solution. This should not occur.");
}

// 🐸🐸🐸🐸🐸
// 🐸TEST:
// 🐸🐸🐸🐸🐸
describe("twoSum Test", () => {

    test('Сумма двух (первый тест)', () => {
        // Тестовые данные
        const nums: number[] = [2, 7, 11, 15]
        const target = 9

        // Результат
        const result: number[] = twoSum(nums, target);

        // Проверка
        expect(         // ожидаем, что ➡️
            result // то что получилось (вернула функция)
        )
            .toEqual(   // ровняется
                [0, 1]
            )
    })
});
