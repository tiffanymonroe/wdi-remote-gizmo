require_relative "./spec_helper"

describe "RICK DIET" do
  describe "#no_donuts" do
    it "tells RICK good job if he stays on his diet" do
      expect(no_donuts(0)).to eq('Good job, RICK!')
    end

    it "tells RICK to get back on his diet if he eats any donuts" do
      expect(no_donuts(3)).to eq('Get back on your diet!')
    end
  end

  describe "#less_donuts" do
    it "tells RICK good job if he stays on his diet" do
      expect(less_donuts(2)).to eq('Good job, RICK!')
    end

    it "tells RICK to slow down if he eats 3 donuts" do
      expect(less_donuts(3)).to eq('Slow down!')
    end

    it "tells RICK to get back on his diet if he eats more than 3 donuts" do
      expect(less_donuts(4)).to eq('Get back on your diet!')
    end
  end

  describe "#some_donuts" do
    it "tells RICK good job if he eats less than half his maximum intake" do
      expect(some_donuts(2, 6)).to eq('Good job, RICK!')
    end

    it "tells RICK to get back on his diet when he has eaten more than his maximum intake" do
      expect(some_donuts(7, 6)).to eq('Get back on your diet!')
    end
  end

  describe "#new_diet" do
    it "it tells RICK good job if he sticks to his diet" do
      expect(new_diet(0, 5)).to eq('Good job!')
    end

    it "it tells RICK to get back on his diet when he strays" do
      expect(new_diet(5, 5)).to eq('Get back on your diet!')
    end
  end

    describe "#motivation" do
      it "tells RICK that he's never gonna give it up" do
        expect(motivation("diet")).to eq('Never gonna give you up.')
      end

      it "tells RICK that he's not going to let his mom down" do
        expect(motivation("fans")).to eq('Never gonna let you down.')
      end
    end
end
