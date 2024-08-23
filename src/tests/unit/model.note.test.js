const mockingoose = require('mockingoose');
const Note = require("../../models/note")
const bodyParser = require("body-parser")

module.exports = function(app) {
    app.use(bodyParser.urlencoded({ extended: true }));
}

// Unit Tests only test the validation built into Note

describe('mockingoose', () => {
    beforeEach(() => {
        mockingoose.resetAll();
        jest.clearAllMocks()
    })

    describe("Test Both Fields Are Set", () => {
        it('Validate Model', async () => {
            const todo = new Note({
                title: "Task Note",
                description: "" // "This can't be blank"
            });

            const result = await todo.validateSync();
            expect(result == undefined).toBe(false);
        });
    })
})
