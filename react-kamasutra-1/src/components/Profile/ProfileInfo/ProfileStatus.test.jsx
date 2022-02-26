import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";


describe("ProfileStatus", () => { //
    test("status in the props", () => {
      const component = create(<ProfileStatus status="Cat sleeping" />);
      const instance = component.getInstance(); // дай мне экземпляр объекта с кторым мы взаимодействуем
      expect(instance.state.status).toBe("Cat sleeping");  // status должен быть (to be) Cat sleeping
    });

    test("span должен отображаться в статусе", () => {
        const component = create(<ProfileStatus status="Cat sleeping" />);
        const root = component.root; // дай мне экземпляр объекта с кторым мы взаимодействуем
        const span = root.findByType("span");
        expect(span).not.toBeNull();
      });


    test("input не должен отображаться в статусе", () => {
        const component = create(<ProfileStatus status="Cat sleeping" />);
        const root = component.root; // дай мне экземпляр объекта с кторым мы взаимодействуем
        expect(() => {
            const input = root.findByType("input");
        }).toThrow();
      });


    test("если span нашелся то его экз. 0 = Cat sleeping ", () => {
        const component = create(<ProfileStatus status="Cat sleeping" />);
        const root = component.root; // дай мне экземпляр объекта с кторым мы взаимодействуем
        const span = root.findByType("span");
        expect(span.children[0]).toBe("Cat sleeping");
      });


    test("input должен отображаться в editMode вместо span", () => {
        const component = create(<ProfileStatus status="Cat sleeping" />);
        const root = component.root; // дай мне экземпляр объекта с кторым мы взаимодействуем
        const span = root.findByType("span");
        expect(span.children[0]).toBe("Cat sleeping");
      });


    test("input должен отображаться в editMode вместо span", () => {
        const component = create(<ProfileStatus status="Cat sleeping" />);
        const root = component.root; // дай мне экземпляр объекта с кторым мы взаимодействуем
        const span = root.findByType("span");
        span.props.onDoubleClick() // кликаем на span
        const input = root.findByType("input"); // находим input
        expect(input.props.value).toBe("Cat sleeping"); // а в inpute дожден быть Cat sleeping
      });


      test("callback должен быть вызван", () => {
        const mockCallback = jest.fn(); //фейковая ф-ция
        const component = create(<ProfileStatus status="Cat sleeping" updateStatus={mockCallback} />);
        const instance = component.getInstance();
        instance.deactivateEditMode(); // если бмы перешли в deactivateEditMode то...
        expect(mockCallback.mock.calls.length).toBe(1);// фейкова ф-ция должа быть вызвана 1 раз
    });
  });

  