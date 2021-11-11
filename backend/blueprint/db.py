class Database:
    def __init__(self):
        self.users = self._users()
        self.projects = self._projects()
        self.expenses = self._expenses()
        self.category = self._category()

    def _category(self):
        return [
            {
                "id": 1,
                "name": "Production"
            },
            {
                "id": 2,
                "name": "Operation"
            },
            {
                "id": 3,
                "name": "Financial"
            },
            {
                "id": 4,
                "name": "Vendor"
            },
            {
                "id": 5,
                "name": "Manpower"
            },
            {
                "id": 6,
                "name": "Software"
            },
            {
                "id": 7,
                "name": "Hardware"
            }
        ]

    def _expenses(self):
        return [
            {
                "id": 1,
                "project_id": 2,
                "category_id": 2,
                "name": "Server Maintenance",
                "description": "Server maintenance and upgrading work to incorporate BC plans",
                "amount": 30000,
                "created_at": "2021-11-04T16:00:00.000Z",
                "created_by": "Jacky",
                "updated_at": "2021-11-06T16:00:00.000Z",
                "updated_by": "Jacky"
            },
            {
                "id": 2,
                "project_id": 3,
                "category_id": 4,
                "name": "Consultant",
                "description": "Consultancy services for integration work",
                "amount": 10000,
                "created_at": "2021-11-06T16:00:00.000Z",
                "created_by": "Helen",
                "updated_at": "2021-11-07T16:00:00.000Z",
                "updated_by": "Helen"
            }
        ]

    def _projects(self):
        return [
            {
                "id": 1,
                "user_id": 4,
                "name": "RTF",
                "budget": 12000,
                "description": "Realtime Face Recogniton"
            },
            {
                "id": 2,
                "user_id": 1,
                "name": "SWT",
                "budget": 80000,
                "description": "Smart Watch Tracker"
            },
            {
                "id": 3,
                "user_id": 2,
                "name": "ULS",
                "budget": 11000,
                "description": "Upgrade Legacy System"
            }
        ]

    def _users(self):
        return [
            {
                "id": 1,
                "username": "user101",
                "password": "$pbkdf2-sha256$29000$xpjT.n.vtRZCaC0FQEjJ2Q$DV81tY1Rp1pnCF6QtfDsYZSgPYto1MNZDRRFLCnDWO0",
                "name": "Jacky",
                "appointment": "Project Lead"
            },
            {
                "id": 2,
                "username": "user102",
                "password": "$pbkdf2-sha256$29000$xpjT.n.vtRZCaC0FQEjJ2Q$DV81tY1Rp1pnCF6QtfDsYZSgPYto1MNZDRRFLCnDWO0",
                "name": "Jane",
                "appointment": "Project Manager"
            },
            {
                "id": 3,
                "username": "user103",
                "password": "$pbkdf2-sha256$29000$xpjT.n.vtRZCaC0FQEjJ2Q$DV81tY1Rp1pnCF6QtfDsYZSgPYto1MNZDRRFLCnDWO0",
                "name": "Tom",
                "appointment": "Project Manager"
            },
            {
                "id": 4,
                "username": "user104",
                "password": "$pbkdf2-sha256$29000$xpjT.n.vtRZCaC0FQEjJ2Q$DV81tY1Rp1pnCF6QtfDsYZSgPYto1MNZDRRFLCnDWO0",
                "name": "Helen",
                "appointment": "Project Manager"
            },
            {
                "id": 5,
                "username": "user105",
                "password": "$pbkdf2-sha256$29000$xpjT.n.vtRZCaC0FQEjJ2Q$DV81tY1Rp1pnCF6QtfDsYZSgPYto1MNZDRRFLCnDWO0",
                "name": "Mark",
                "appointment": "Senior Project Manager"
            }
        ]
