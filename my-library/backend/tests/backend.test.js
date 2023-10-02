import jest from "jest";
import { createBackendServer, db } from "../db.js";
import getPort from "get-port";
import axios from "axios";
// require("jest");
// var backend = require("../db.js");

describe("Backend Server", () => {
    let port = 6800;

    beforeAll(async () => {
        port = await getPort();
        createBackendServer(port);
    });

    afterAll(() => {
        db.destroy();
    })

    it("Check if user already exists", async () => {
        const data = {
            username: "anna",
            email: "test",
            password: "test",
            nom: "test",
            prenom: "test",
            adresse: "test",
            codepost: "test"
        }

        try {
            const response = await axios.post(`http://localhost:${port}/api/auth`, data)
        }
        catch (err) {
            console.log(err);
            expect(err.response.status).toEqual(409); //?
        }
    });

    it("Create a new user", async () => {
        // axios.post
        let randomNumber = Math.round(Math.random() * 1000000); //?

        const data = {
            username: "anna3asd" + randomNumber,
            email: "testd@asd" + randomNumber,
            password: "test",
            nom: "test",
            prenom: "test",
            adresse: "test",
            codepost: "test"
        }

        // call localhost 8800 "api/authenticate"
        try {
            const res = await axios.post(`http://localhost:${port}/api/auth`, data)
            expect(res.status).toEqual(200);
        }
        catch (error) {
            console.log("ERROR! " + error);
            expect(error).toEqual(null);
        }
    });
})